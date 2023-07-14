import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const Settings = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/settings/account");
  }, []);

  return <></>;
};

export default Settings;
