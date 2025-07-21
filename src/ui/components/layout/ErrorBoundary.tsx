// components/ErrorBoundary.tsx
import React from 'react';
import ErrorPage from './ErrorPage';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('ErrorBoundary caught:', error, info);
        // 🔒 Optionally log to external service (e.g., Sentry, LogRocket)
    }

    render() {
        if (this.state.hasError) {
            return (
                    <ErrorPage />
            );
        }

        return this.props.children;
    }
}
