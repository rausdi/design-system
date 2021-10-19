import SVGBase, { SVGBaseType } from "./SVGBase";

function Arrow(props: SVGBaseType) {
  const { className } = props;
  return (
    <SVGBase className={className} viewBox="0 0 5 8">
      <path d="M4.54 3.688L1.005.128a.43.43 0 00-.614 0L.13.39a.44.44 0 000 .619l2.968 2.99L.127 6.99a.436.436 0 00-.127.31c0 .117.045.227.127.31l.26.261a.43.43 0 00.615 0L4.54 4.31a.437.437 0 00.127-.31.437.437 0 00-.127-.311z" />
    </SVGBase>
  );
}

export default Arrow;
