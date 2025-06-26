import React from "react";

function SignInPage({ params }: { params: { "sign-in": string } }) {
  console.log(params);
  
  return <div>SignInPage</div>;
}

export default SignInPage;
