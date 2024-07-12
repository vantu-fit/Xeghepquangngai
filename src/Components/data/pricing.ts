export interface Price {
    _id: {
        $oid: string;
    };
    price: number;
    from: string;
    to: string;
    createdAt: {
        $date: string;
    };
    priceOne: number;
    type: string;
}


export const PriceData : Price[] = [{
    "_id": {
      "$oid": "64ec099080a4ebd0e9487a82"
    },
    "price": 650,
    "from": "Chu Lai",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:42:24.203Z"
    },
    "priceOne": 200,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec09b680a4ebd0e9487a83"
    },
    "price": 600,
    "from": "Chu Lai",
    "to": "Quảng Ngãi",
    "createdAt": {
      "$date": "2023-08-28T02:43:02.223Z"
    },
    "priceOne": 200,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec09fa80a4ebd0e9487a84"
    },
    "price": 1000,
    "from": "Chu Lai",
    "to": "Hội An",
    "createdAt": {
      "$date": "2023-08-28T02:44:10.873Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0a2f80a4ebd0e9487a85"
    },
    "price": 1400,
    "from": "Chu Lai",
    "to": "Sa Huỳnh",
    "createdAt": {
      "$date": "2023-08-28T02:45:03.271Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0a5880a4ebd0e9487a86"
    },
    "price": 350,
    "from": "Quảng Ngãi",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:45:44.379Z"
    },
    "priceOne": 150,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0a6d80a4ebd0e9487a87"
    },
    "price": 1300,
    "from": "Đà Nẵng",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:46:05.839Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0a8080a4ebd0e9487a88"
    },
    "price": 1200,
    "from": "Đà Nẵng",
    "to": "Quảng Ngãi",
    "createdAt": {
      "$date": "2023-08-28T02:46:24.916Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0a9480a4ebd0e9487a89"
    },
    "price": 1200,
    "from": "Hội An",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:46:44.850Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0aaf80a4ebd0e9487a8a"
    },
    "price": 500,
    "from": "Hội An",
    "to": "Đà Nẵng",
    "createdAt": {
      "$date": "2023-08-28T02:47:11.228Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0ae680a4ebd0e9487a8b"
    },
    "price": 1200,
    "from": "Sa kỳ",
    "to": "Tam kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:48:06.499Z"
    },
    "priceOne": 250,
    "type": "7 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0b2380a4ebd0e9487a8c"
    },
    "price": 1000,
    "from": "Sa kỳ",
    "to": "Tam kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:49:07.708Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0b5180a4ebd0e9487a8d"
    },
    "price": 500,
    "from": "Chu Lai",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:49:53.644Z"
    },
    "priceOne": 200,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0b5d80a4ebd0e9487a8e"
    },
    "price": 500,
    "from": "Chu Lai",
    "to": "Quảng Ngãi",
    "createdAt": {
      "$date": "2023-08-28T02:50:05.522Z"
    },
    "priceOne": 200,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0b7480a4ebd0e9487a8f"
    },
    "price": 1000,
    "from": "Chu Lai",
    "to": "Hội An",
    "createdAt": {
      "$date": "2023-08-28T02:50:28.597Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0b8480a4ebd0e9487a90"
    },
    "price": 1400,
    "from": "Chu Lai",
    "to": "Sa Huỳnh",
    "createdAt": {
      "$date": "2023-08-28T02:50:44.826Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0c0c80a4ebd0e9487a91"
    },
    "price": 400,
    "from": "Quảng Ngãi",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:53:00.996Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0c7480a4ebd0e9487a92"
    },
    "price": 900,
    "from": "Đà Nẵng",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:54:44.910Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0cd380a4ebd0e9487a93"
    },
    "price": 900,
    "from": "Đà Nẵng",
    "to": "Quảng Ngãi",
    "createdAt": {
      "$date": "2023-08-28T02:56:19.360Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0d0e80a4ebd0e9487a94"
    },
    "price": 800,
    "from": "Hội An",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:57:18.119Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0d1e80a4ebd0e9487a95"
    },
    "price": 1000,
    "from": "Hội An",
    "to": "Quảng Ngãi",
    "createdAt": {
      "$date": "2023-08-28T02:57:34.323Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  },
  {
    "_id": {
      "$oid": "64ec0d3c80a4ebd0e9487a96"
    },
    "price": 800,
    "from": "Tam Kỳ",
    "to": "Sa Kỳ",
    "createdAt": {
      "$date": "2023-08-28T02:58:04.397Z"
    },
    "priceOne": 250,
    "type": "4 Chỗ"
  }]