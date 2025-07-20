import React from 'react';
import { Search } from "lucide-react";
import PrimaryBtn from '../../../components/Btns/PrimaryBtn';

interface SearchFormProps {
  onSearch: (e: React.FormEvent) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => (
  <form onSubmit={onSearch} className="flex items-center gap-2 mt-2">
    <input
      type="text"
      placeholder="Search by Paper ID, Paper Name"
      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm xl:text-base 2xl:text-lg"
    />
    <PrimaryBtn>
      <Search size={16} /> Search
    </PrimaryBtn>
  </form>
);