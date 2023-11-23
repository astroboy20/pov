const sizes = {
    $xsmall: "468px",
    $small: "768px",
    $medium: "992px",
    $large: "1200px",
    $xlarge: "1440px",
  };
  
  export const responsive = (key) => {
    return (style) =>
      `@media (max-width: ${sizes[key]}) { ${style} }`;
  };
  