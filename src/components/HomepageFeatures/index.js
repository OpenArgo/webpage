import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source Innovation',
    Svg: require('@site/static/img/circuit_board.svg').default,
    description: (
      <>
        OpenArgo embodies the spirit of open-source innovation with its custom electrical hardware. Every circuit and component is designed to be shared, studied, and enhanced by the community, driving collective advancement.
      </>
    ),
  },
  {
    title: 'Warehouse-Style Mobility',
    Svg: require('@site/static/img/building_blocks.svg').default,
    description: (
      <>
        OpenArgo is designed as a warehouse-style mobile robot, filling a crucial gap in the open-source robotics space. Its platform allows for seamless extensibility, making it easy to add components and modules to the top, tailored to your specific needs.
      </>
    ),
  },
  {
    title: 'Accessible and Adaptable',
    Svg: require('@site/static/img/solution_mindset.svg').default,
    description: (
      <>
        OpenArgo is crafted to be user-friendly and highly adaptable. Whether you're a hobbyist, educator, or researcher, you can easily modify its features to suit your project needs, promoting creativity and experimentation.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
