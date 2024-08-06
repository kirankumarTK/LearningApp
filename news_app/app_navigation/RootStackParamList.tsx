export type RootStackParamList = {
  News: undefined;
  Splash: undefined;
  Home: undefined;
  Sports: undefined;
  Health: undefined;
  WebViewPage: {
    url: string;
    title: string;
  };
};

export type NewItemPramsList = {
  newItem: {
    title: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
    description: string;
    author: string;
    source: {
      id: string;
      name: string;
    };
  };
  validateImageURL: (uri: string) => string;
  naivigateToWebview: (url: string, title: string) => void;
};

export type ErrorPramsList = {
  errorMsg: string;
};
