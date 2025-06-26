import React from "react";

function SignInPage({ params }: { params: { "sign-in": string[] } }) {
  console.log(params['sign-in'][1]);
  
  return <div>SignInPage</div>;
}

export default SignInPage;
