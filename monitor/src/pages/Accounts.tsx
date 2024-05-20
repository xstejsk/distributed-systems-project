import React, { FC } from "react";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useQuery } from "react-query";
import { Account, Page } from "../models/common";
import accountsApi from "../service/accountsApi";
import { Link, useSearchParams } from "react-router-dom";
import RefreshButton from "../components/RefreshIcon";

const columns = ["Id", "Name", "Balance", "Transactions"];

const Accounts = () => {
  const { darkMode } = useContext(ThemeContext);
  const [searchParams] = useSearchParams();

  const { data, isLoading, isError, error, refetch } = useQuery<
    Page<Account>,
    Error
  >({
    queryKey: ["users", searchParams.toString()],
    queryFn: () => accountsApi.getAll(new URLSearchParams(searchParams)),
    keepPreviousData: true,
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    data && (
      <>
        <div className=" absolute top-0 right-0 px-10 pt-14 ">
          <RefreshButton refresh={refetch} />
        </div>

        <div className="px-10 w-full flex max-h-full">
          <div className="flex flex-col max-h-full w-full  gap-2">
            <div
              className={`flex max-h-full w-full overflow-scroll ${
                darkMode
                  ? "custom-scrollbar custom-scrollbar-dark"
                  : "custom-scrollbar"
              }`}
            >
              <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                <thead className={darkMode ? "bg-border-dark" : "bg-gray-50"}>
                  <tr>
                    {columns.map((column) => (
                      <th
                        scope="col"
                        className={`px-6 py-3 text-left text-xs font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-400"
                        } uppercase tracking-wider`}
                        key={column}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    darkMode ? "divide-border-dark" : "divide-gray-200"
                  }`}
                >
                  {data.content.map((account) => (
                    <tr key={account.id}>
                      <Row children={account.id} />
                      <Row children={account.customer} />
                      <Row children={account.balance.toFixed(2)} />
                      <Row
                        children={
                          <Link
                            className="text-blue-500 hover:underline"
                            to={`/transactions?accountId=${account.id}`}
                          >
                            Transactions
                          </Link>
                        }
                      />
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-center">
                      Total: {data.totalElements}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {data && (
              <Pagination
                isLoading={isLoading}
                isError={isError}
                totalPages={data.totalPages}
              />
            )}
          </div>
        </div>
      </>
    )
  );
};

type RowProps = {
  children: React.ReactNode;
};

const Row: FC<RowProps> = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap text-sm ${
        darkMode ? "text-gray-300 bg-code-dark" : "text-gray-500"
      }`}
    >
      {children}
    </td>
  );
};

export default Accounts;
