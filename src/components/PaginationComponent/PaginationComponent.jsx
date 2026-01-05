import css from "./PaginationComponent.module.css";

export default function PaginationComponent({ pagination, setPage }) {
    const {page, totalPages, previousPage } = pagination;
return (
  <div className={css.containerPaginationComponent}>
    {previousPage && (
            <button className={css.previousPage} onClick={() => setPage(Number(page) - 1)}>{Number(page) - 1}</button>
    )}
    <p className={css.page}>{page}</p>
    {totalPages > page && <button className={css.nextPage} onClick={()=> setPage(Number(page) + 1)}>{Number(page) + 1}</button>}
    </div>
);
}