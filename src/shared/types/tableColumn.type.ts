import { CellProps, Column } from "react-table";
import CSS from "csstype";

interface CustomTableColumn<T> {
    styles?: CSS.Properties;
    Footer?: (info: React.PropsWithChildren<CellProps<any, any>>) => void;
}

export type TableColumn<T extends {}> = CustomTableColumn<T> & Column<T>;
