const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASKET_LOADING":
      return { ...state, isLoading: true };
    case "SET_BASKET_ERROR":
      return { ...state, isLoading: false, isError: action.payload };
    case "SET_BASKET_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };
    case "ADD":
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };
    case "UPDATE":
      //1) GUNCELLENECEK DİZİNİN KOPYASINI OLUSTURCAZ
      const cloneBasket = [...state.basket];

      // 2)GUNCELLEMNECEK ELEMANIN DIZIDEKİ SIRASINI BULCAZ

      const foundId = cloneBasket.findIndex(
        (item) => item.id === action.payload
      );
      //  3) elemanın miktarını  1 arttır
      cloneBasket[foundId].amount++;
      return { ...state, basket: cloneBasket };

    case "DELETE":
      const filtred = state.basket.filter((item) => item.id !== action.payload);
      return { ...state, basket: filtred };

    default:
      return state;
  }
};

export default basketReducer;
