
export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}


export interface GeoProps {
    lat: string;
    lng: string;
  }
  
  export interface AddressProps {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoProps;
  }
  
  export interface CompanyProps {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressProps;
    phone: string;
    website: string;
    company: CompanyProps;
  }
  

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface Post {
    title: string;
    body: string;
    userId: number;
}

export interface ButtonProps2 {
    name: string;
    color: string;
    onClick: () => void;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}