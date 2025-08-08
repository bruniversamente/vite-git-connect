import React, { Component, ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: unknown }

export default class DevErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error("App error boundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-dvh grid place-items-center p-6 bg-white">
          <div className="max-w-xl text-center">
            <h1 className="text-xl font-semibold">Ocorreu um erro na interface</h1>
            <p className="text-neutral-600 mt-2">Atualize a página. Os detalhes foram registrados no console.</p>
            <pre className="text-xs text-red-600 mt-4 bg-red-50 p-3 rounded overflow-auto max-h-48">
              {String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}
