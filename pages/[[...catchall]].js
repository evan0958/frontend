import { PLASMIC } from '../lib/plasmic';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

export async function getStaticProps({ params }) {
  const slug = params?.catchall?.join('/') || 'index';
  const plasmicData = await PLASMIC.fetchComponentData(slug);
  if (!plasmicData) {
    return { notFound: true };
  }
  return {
    props: {
      plasmicData,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default function Catchall({ plasmicData }) {
  return <PlasmicComponent component={plasmicData.entryComp} />;
}
