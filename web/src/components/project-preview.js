import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  return (
    <a className={styles.root} href={props.link}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
    </a>
    
  );
}

export default ProjectPreview;
