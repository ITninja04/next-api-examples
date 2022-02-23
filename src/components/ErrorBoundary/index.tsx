import React from 'react'

interface Props {
  hideNotice?: boolean
  errorContent?: any
  errorCallback?: (error: Error, errorInfo: React.ErrorInfo) => void
  children: React.ReactNode
}

interface State {
  hasError: boolean
  errorContent?: any
}
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_err: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error)
    console.error(errorInfo)

    if (this?.props?.errorCallback) {
      this.props.errorCallback(error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.hideNotice) return <></>
      return (
        <div className="modal-open modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>An error occurred while rendering this view.</span>
                </div>
              </div>
            </h3>
            <p className="py-4">Please refresh and try again.</p>
            <div className="modal-action"></div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
