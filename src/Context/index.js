import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const initialTimeState = {
  abbreviation: 'BST',
  datetime: '11:37',
  day_of_week: 5,
  day_of_year: 295,
  city: 'London',
  country_code: 'UK',
  timezone: 'Europe/London',
  week_number: 42,
};

const initialQuoteState = {
  author: 'Ada Lovelace',
  content:
    'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
};

const Provider = ({ children }) => {
  const [time, setTime] = useState(initialTimeState);
  const [quote, setQuote] = useState(initialQuoteState);
  const [isActive, setIsActive] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [dayTime, setDayTime] = useState('morning');

  const showDetails = () => setIsActive(prev => !prev);

  const checkNightTime = time => {
    const currentHour = new Date(time).getHours();
    setIsNight(currentHour <= 5 || currentHour >= 18 ? true : false);
  };

  const checkDayTime = time => {
    const hour = new Date(time).getHours();
    switch (true) {
      case hour >= 5 && hour < 12:
        return 'morning';
      case hour >= 12 && hour < 18:
        return 'afternoon';
      case hour >= 18 && hour < 5:
        return 'evening';
      default:
        return 'morning';
    }
  };

  const getTime = async () => {
    try {
      const response = await fetch('https://worldtimeapi.org/api/ip');
      const data = await response.json();

      if (response.status === 200) {
        const {
          abbreviation,
          datetime,
          day_of_week,
          day_of_year,
          timezone,
          week_number,
        } = data;

        setTime(prev => ({
          ...prev,
          abbreviation,
          datetime: new Date(datetime).toTimeString().slice(0, 5),
          day_of_week,
          day_of_year,
          timezone,
          week_number,
        }));

        checkNightTime(datetime);
        setDayTime(checkDayTime(datetime));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getLocation = async () => {
    try {
      const response = await fetch('https://freegeoip.app/json');
      const data = await response.json();

      if (response.status === 200) {
        const { city, country_code } = data;

        setTime(prev => ({
          ...prev,
          city,
          country_code,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      if (response.status === 200) {
        const { author, content } = data;

        setQuote({
          author,
          content,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTime();
    getLocation();
    getQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    dayTime,
    getQuote,
    isActive,
    isNight,
    quote,
    showDetails,
    time,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
