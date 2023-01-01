import React, { useContext } from "react";
import { UserContext } from "../../App";
import styles from "./Post.module.css";

export default function Post({ post }) {
  const user = useContext(UserContext);

  const { user: userInfo } = user;

  return (
    <>
      {userInfo?.token && (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.card_banner}>
              <p className={`${styles.category_tag} ${styles.popular}`}>Blog</p>
              <img
                className={styles.banner_img}
                src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="blog"
              />
            </div>
            <div className={styles.card_body}>
              <p className={styles.blog_hashtag}>
                #{post?.author?.name} #{post?.date}
              </p>
              <h2 className={styles.blog_title}>{post?.title}</h2>
              <p className={styles.blog_description}>{post?.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
