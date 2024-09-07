import { Text } from '~/components/Text';
import config from '~/config.json';
import { classes } from '~/utils/style';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/johndavedalmao/"
        target="_blank"
      >
        Crafted by yours truly
      </a>
    </Text>
  </footer>
);
