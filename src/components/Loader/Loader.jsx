import { ColorRing } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#1a46bb', '#1a46bb', '#1a46bb', '#1a46bb', '#1a46bb']}
      />
    </LoaderBox>
  );
};
