import SVGBase, { SVGBaseType } from "./SVGBase";

function Sort(props: SVGBaseType) {
  const { className } = props;
  return (
    <SVGBase className={className} viewBox="0 0 11 11">
      <path d="M0 11h3.667V9.167H0V11zM0 0v1.833h11V0H0zm0 6.417h7.333V4.583H0v1.834z" />
    </SVGBase>
  );
}

export default Sort;
