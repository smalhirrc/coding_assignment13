interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

declare const Button: React.FC<ButtonProps>;

interface CardProps {
    title: string;
    content: string;
    imageUrl?: string;
}

declare const Card: React.FC<CardProps>;

interface ImgProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
}

declare const Img: React.FC<ImgProps>;

interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange: (value: string) => void;
}

declare const RadioButton: React.FC<RadioButtonProps>;

interface TableProps {
    columns: string[];
    data: any[];
    onRowClick?: (rowData: any) => void;
}

declare const Table: React.FC<TableProps>;

interface TextProps {
    content: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

declare const Text: React.FC<TextProps>;

export { Button, Card, Img, RadioButton, Table, Text };
