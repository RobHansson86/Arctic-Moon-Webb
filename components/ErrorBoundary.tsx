import React, { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-moon-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white p-8 rounded-sm shadow-lg border border-moon-200 text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl font-bold text-moon-900 mb-4">
              Något gick fel
            </h1>
            <p className="text-moon-600 mb-6">
              Vi beklagar, men något oväntat inträffade. Vänligen försök igen.
            </p>
            {this.state.error && (
              <div className="bg-moon-100 p-4 rounded-sm mb-6 text-left">
                <p className="text-xs font-mono text-moon-700 break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}
            <Button onClick={this.handleReset} fullWidth>
              Tillbaka till startsidan
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
