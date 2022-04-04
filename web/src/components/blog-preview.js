import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import * as styles from "./blog-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function BlogPreview(props) {
  return (
    <Link className={styles.root} to={`/blog/${props.slug.current}`}>
      <div className={styles.blogDetail}>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
      </div>

      
    </Link>
  );
}

export default BlogPreview;
