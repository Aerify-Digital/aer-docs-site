import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Aerify Digital',
    img: require('@site/static/img/ad_logo-b2.png').default,
    description: (
      <>
        Improbable Electronics
      </>
    ),
  }
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--5')} style={{margin: 'auto'}}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
