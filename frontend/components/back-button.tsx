'use client';

import React from "react";
import {useRouter} from 'next/navigation';
import { Button } from "./ui/button";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="outline" className="my-1 p-8" onClick={router.back}>
      Go Back
    </Button>
  );
};

export default BackButton;
