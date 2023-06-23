"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Skeleton1 from "@/components/skeleton/Skeleton1";

export default function Home(){
  const session = useSession()
  const router = useRouter()
  console.log(session)
  if(session.status==="loading"){
    return<Skeleton1/>
  }
    if(session.status === "authenticated" ){
      router.push("/dashboard")}
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <h1 className={styles.heading}>Board.</h1>
      </div>
      <div className={styles.login}>
        <div className={styles.forms}>
          <h1 className={styles.form_heading}>Sign In</h1>
          <p className={styles.form_subHeading}>Sign in to your account</p>
          <div className={styles.login_buttons}>
            <div className={styles.button}  onClick={async()=>await signIn("google")}>
              <Image src="/google.svg" height={15} width={15} alt="google"/>
              Sign in with Google
            </div>
            <div className={styles.button}>
              <Image src="/apple.svg" height={15} width={15} alt="apple"/>
              Sign in with Apple
            </div>
          </div>
          <div className={styles.login_card}>
            <form className={styles.form}>
              <div className={styles.form_group}>
                <label htmlFor="username" className={styles.label}>
                  Email address
                </label>
                <input
                  required=""
                  name="email"
                  id="email"
                  type="email"
                  className={styles.input}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  required=""
                  name="password"
                  id="password"
                  type="password"
                  className={styles.input}
                />
              </div>
              <Link href="/" className={styles.link}>Forgot password?</Link>
              <div className={styles.form_group}>
                <input value="Sign In" type="submit" className={styles.input} />
              </div>
            </form>
          </div>
            <p className={styles.register}>Dont have an account? <Link className={styles.link} href="/">Register here</Link></p>
        </div>
      </div>
      
    </div>
  );
};

