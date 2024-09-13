import Heading from '@theme/Heading';

import users from '@site/contributors.json';
import styles from './style.module.css';

type User = {
    name: string;
    url: string;
    avatar: string;
    login: string;
}

export default function Contributors() {
  return (
    <div className="container narrow">
      <Heading as="h2" id="contributors">Contributors</Heading>
      <ul className={styles.contributors}>
        {users.map((user: User) => {
          return (
            <li key={user.login}>
              <a href={user.url} rel="nofollow noopener">
                <img src={user.avatar} alt={user.name} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
