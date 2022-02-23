import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import React from "react";

export interface ErrorStateProps {
  message: string;
  showRefreshButton: boolean;
}

const ErrorState:React.FC<ErrorStateProps> = ({message, showRefreshButton}) => (
  <div className="flex h-screen justify-center items-center">
    <Alert
      status='error'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Application submitted!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        {message ?? "An error occurred while processing your request. Please refresh and try again."}
        {showRefreshButton && (
          <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>refresh-02</title><g fill="#F7F7F7"><path fill="#F7F7F7" d="M43.316,2.051c-0.36-0.12-0.756-0.026-1.023,0.242L37.04,7.546C33.341,4.604,28.789,3,24,3 C14.052,3,5.396,10.066,3.42,19.801c-0.11,0.542,0.24,1.069,0.781,1.179C4.268,20.994,4.335,21,4.401,21 c0.466,0,0.883-0.327,0.979-0.801C7.168,11.392,14.999,5,24,5c4.254,0,8.297,1.406,11.611,3.975l-5.318,5.318 c-0.268,0.268-0.361,0.664-0.242,1.023s0.432,0.62,0.807,0.673l14,2C44.906,17.997,44.953,18,45,18c0.263,0,0.518-0.104,0.707-0.293 c0.223-0.223,0.328-0.537,0.283-0.849l-2-14C43.937,2.483,43.676,2.171,43.316,2.051z"></path> <path d="M43.799,27.02c-0.545-0.11-1.069,0.24-1.179,0.781C40.832,36.608,33.001,43,24,43 c-4.254,0-8.297-1.406-11.611-3.975l5.318-5.318c0.268-0.268,0.361-0.664,0.242-1.023s-0.432-0.62-0.807-0.673l-14-2 c-0.313-0.046-0.626,0.06-0.849,0.283S1.965,30.83,2.01,31.142l2,14c0.053,0.375,0.314,0.688,0.673,0.807 C4.788,45.983,4.894,46,5,46c0.261,0,0.517-0.103,0.707-0.293l5.253-5.253C14.659,43.396,19.211,45,24,45 c9.948,0,18.604-7.066,20.58-16.801C44.69,27.658,44.34,27.13,43.799,27.02z"></path> </g></svg>
            <span className="p-6">Refresh</span>
          </button>
        )}
      </AlertDescription>
    </Alert>
  </div>
)


export default ErrorState
