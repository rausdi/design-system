import SVGBase, { SVGBaseType } from "./SVGBase";

function Rectangle(props: SVGBaseType) {
  const { className } = props;
  return (
    <SVGBase className={className} viewBox="0 0 9 5">
      <path d="M4.593 4.608a.251.251 0 01-.37 0L.587.757C.422.583.538.285.771.285h7.274c.233 0 .35.298.185.472L4.593 4.608z" />
    </SVGBase>
  );
}

export default Rectangle;
