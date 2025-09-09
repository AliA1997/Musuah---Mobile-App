import { useRouter } from 'expo-router';
import WikiSearchResults from '~/components/WikiSearchResults';

export default function SearchResults() {
  const router = useRouter();
  
  const navigateToPage = (pageId: string) => {
    router.navigate({ pathname: '/(drawer)/(tabs)/SearchPages/details/[pageid]', params: { pageid: pageId } })
  };
  
  return (
    <>
        <WikiSearchResults /> 
    </>
  );
}