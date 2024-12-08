export interface NewsletterFormProps {
    onSubmit: (email: string) => void;
  }
  
  export interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export interface SignUpButtonProps {
    onClick: () => void;
  }