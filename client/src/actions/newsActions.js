

export const news = {
  refreshNews: (newsFeed) => {
    return {
      type: 'REFRESH_NEWS',
      payload: newsFeed
    };
  }
};