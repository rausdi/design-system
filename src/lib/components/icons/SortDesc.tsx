import SVGBase, { SVGBaseType } from "./SVGBase";

function SortDesc(props: SVGBaseType) {
  const { className } = props;
  return (
    <SVGBase className={className} viewBox="0 0 12 12">
      <path d="M.667 0h10.666c.368 0 .667.316.667.706 0 .39-.299.706-.667.706h-6V0H3.337c.368.001.665.317.665.706v9.355L5.39 8.64a.543.543 0 01.78 0 .574.574 0 010 .799l-2.34 2.396a.543.543 0 01-.488.156.551.551 0 01-.49-.156L.49 9.439a.57.57 0 010-.8c.217-.22.57-.22.787 0l1.39 1.412V.706c0-.39.298-.705.665-.706H.66h.007z" />
      <path d="M5.334 2.824v1.412H10c.368 0 .667-.316.667-.706 0-.39-.299-.706-.667-.706H5.334zM5.334 5.648V7.06h3.333c.368 0 .666-.316.666-.706 0-.39-.298-.706-.666-.706H5.334zM0 .706V.678v.028z" />
    </SVGBase>
  );
}

export default SortDesc;