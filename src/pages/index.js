export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/bitcoin',
      permanent: false,
    },
  };
}

export default function IndexPage() {
  return null;
}
