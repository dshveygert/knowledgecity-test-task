import React, { useEffect, useState } from 'react';
import { Students } from '../../models';
import { studentList } from '../../api/students';
import { UserList } from '../../components/UserList/UserList';
import { Loader } from '../../components/Loader/Loader';
import { Paginator } from '../../components/Paginator/Paginator';
import './userListPage.css';

export default function UserListPage() {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Students[]>([]);

  const changePage = (p: number): void => {
    setPage(p);
  };

  useEffect(() => {
    setLoading(true);
    studentList(page)
      .then((response) => {
        const { data, total } = response ?? {};
        setPageTotal(total as number);
        setList(data ?? []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);
  return (
    <>
      <h1>User list</h1>
      {loading ? <Loader /> : <UserList data={list} />}
      {pageTotal > perPage ? (
        <Paginator
          page={{ current: page, total: pageTotal, perPage }}
          toPage={changePage}
          max={3}
        />
      ) : (
        <></>
      )}
    </>
  );
}
