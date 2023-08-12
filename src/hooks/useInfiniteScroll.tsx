import { useState, useEffect } from 'react';
import axios from 'axios';

interface Attraction {
  title: string;
  largeCategory: string;
  mediumCategory: string;
  smallCategory: string;
  mapX: number;
  mapY: number;
  areaCode: number;
  sigunguCode: number;
  mapLevel: number;
  address: string;
  detailAddress: string;
  contentId: number;
  contentTypeId: number;
  copyrightType: string;
  image: string;
  thumbnailImage: string;
  createdTime: string;
  modifiedTime: string;
  bookTour: boolean;
  tel: string;
  benikia: boolean;
  goodStay: boolean;
  hanok: boolean;
}

interface ApiResponse {
  resultCode: string;
  resultMessage: string;
  attractions: Attraction[];
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

function useInfiniteScroll() {
  const [data, setData] = useState<Attraction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setpage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      // if (isLoading) {
      //   return;
      // }
      try {
        const response = await axios.get<ApiResponse>(
          `/attraction/search/stay?numOfRows=10&pageNo=${page}&arrange=A&areaCode=1&sigunguCode=1`,
        );
        console.log(response.data);
        setData((data) => [...(data || []), ...response.data.attractions]);
        setIsLoading(false);
        // sethasNextPage()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e.message);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const scrollEvent = () => {
      const { innerHeight } = window;
      const { scrollHeight } = document.body;
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      if (!isLoading && scrollHeight - innerHeight - scrollTop < 10) {
        setpage((page) => page + 1);
      }
    };
    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [isLoading]);

  return { data, isLoading, error };
}

export default useInfiniteScroll;
