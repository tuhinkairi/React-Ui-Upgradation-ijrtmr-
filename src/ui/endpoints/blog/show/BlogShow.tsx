import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../lib/store/store';
import CommonLayout from '../../../components/layout/CommonLayout';
import JournalOverview from '../card/JournalOverview';
import { useEffect, useState } from 'react';
import { setLoading } from '../../../../lib/store/Features/loadingSlice';
import { fetchBlog } from '../../../../lib/axios/api/blog';
import { setBlog, setStoreBlogList } from '../../../../lib/store/Features/BlogSlice';
import { setTotalPages } from '../../../../lib/store/Features/paginationSlice';
import type { Blog } from '../../../../types/Api';
import Loading from '../../../components/Loading';
import MetaDataWrapper from '../../../components/layout/MetaDataWrapper';

const BlogShow = () => {
  const data = useAppSelector((state) => state.blog.activeBlog);
  const blogList = useAppSelector((state) => state.blog.blogList);
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        setError(null);

        // If we already have blog data and the current blog matches the slug, don't refetch
        if (blogList?.length > 0 && slug) {
          const existingBlog = blogList.find(blog => blog.url_title === slug);
          if (existingBlog && data?.url_title === slug) {
            return; // Data already loaded and matches
          }
          if (existingBlog) {
            dispatch(setBlog(existingBlog));
            return;
          }
        }

        // Fetch blog data if we don't have it or need to find a specific blog
        const blogData: Blog[] = await fetchBlog();

        if (!blogData || blogData.length === 0) {
          setError('No blogs found');
          return;
        }

        dispatch(setStoreBlogList(blogData));
        dispatch(setTotalPages(Math.ceil(blogData.length / 10)));

        if (slug) {
          const matchingBlog = blogData.find(blog => blog.url_title === slug);
          if (matchingBlog) {
            dispatch(setBlog(matchingBlog));
          } else {
            setError('Blog not found');
            // Optionally navigate to blog list or 404 page
            // navigate('/blogs');
          }
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError('Failed to load blog data');
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch, slug, navigate, blogList, data?.url_title]);

  // Show error state
  if (error) {
    navigate('/blogs');
  }

  // Show loading or empty state when no data
  if (!data?.id && slug) {
    return (
      <Loading title='Blog Details...' />
    );
  }

  return (
    <MetaDataWrapper desciptionDynamic={data?.meta_description?.split(".")[0] ?? 'Blog Details'} titleDynamic={data?.title ?? slug}>
      <CommonLayout className='space-y-6' title='Blog'>
        <JournalOverview
          category={data?.category ?? ""}
          title={data?.title ?? ""}
          date={data?.created_at?.split("T")[0] ?? ""}
          description={data?.meta_description ?? ""}
          points={[]}
          other={data?.description ?? ""}
        />
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default BlogShow;