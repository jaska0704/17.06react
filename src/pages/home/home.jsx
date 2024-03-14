import React from "react";
import { useGetCategory } from "../../service/query/useGetData";
import { Cart } from "../../components/cart";
import { Table } from "antd";

export const Home = () => {
  const { data } = useGetCategory("avto");
  console.log(data?.id);

  const dataAvto = data?.map((item) => ({
    key: item?.id,
    name: item.title,
    img: <img className="w-[30px]" src={item.img} alt="" />,
    count: item.count,
    price: item.price,
  }));

  const colums = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return <Table dataSource={dataAvto} columns={colums} />;
};
