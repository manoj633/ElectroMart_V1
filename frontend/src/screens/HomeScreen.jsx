import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  //data is renamed to products
  const { data, isLoading, isError } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          <h1>Latest products</h1>
          <Row>
            {data.products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
