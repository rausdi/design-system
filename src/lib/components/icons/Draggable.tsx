import SVGBase, { SVGBaseType } from "./SVGBase";

function Draggable(props: SVGBaseType) {
  const { className } = props;
  return (
    <SVGBase className={className} viewBox="0 0 7 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.235 0A.226.226 0 00.07.07.226.226 0 000 .235v1.412c0 .064.023.119.07.166.046.046.102.07.165.07h1.412a.226.226 0 00.165-.07.226.226 0 00.07-.166V.235a.226.226 0 00-.07-.165.226.226 0 00-.165-.07H.235zM.235 4.706a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .064.023.119.07.165.046.047.102.07.165.07h1.412a.226.226 0 00.165-.07.226.226 0 00.07-.165V4.94a.226.226 0 00-.07-.165.226.226 0 00-.165-.07H.235zM.235 9.412a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .064.023.119.07.165.046.047.102.07.165.07h1.412a.226.226 0 00.165-.07.226.226 0 00.07-.165V9.647a.226.226 0 00-.07-.165.226.226 0 00-.165-.07H.235zM.235 14.118a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .063.023.119.07.165.046.047.102.07.165.07h1.412a.226.226 0 00.165-.07.226.226 0 00.07-.165v-1.412a.226.226 0 00-.07-.165.227.227 0 00-.165-.07H.235zM4.94 0a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .064.023.119.07.166.046.046.102.07.165.07h1.412a.226.226 0 00.166-.07.226.226 0 00.07-.166V.235a.226.226 0 00-.07-.165.226.226 0 00-.166-.07H4.94zM4.94 4.706a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .064.023.119.07.165.046.047.102.07.165.07h1.412a.226.226 0 00.166-.07.226.226 0 00.07-.165V4.94a.226.226 0 00-.07-.165.226.226 0 00-.166-.07H4.94zM4.94 9.412a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .064.023.119.07.165.046.047.102.07.165.07h1.412a.226.226 0 00.166-.07.226.226 0 00.07-.165V9.647a.226.226 0 00-.07-.165.226.226 0 00-.166-.07H4.94zM4.94 14.118a.226.226 0 00-.165.07.226.226 0 00-.07.165v1.412c0 .063.023.119.07.165.046.047.102.07.165.07h1.412a.226.226 0 00.166-.07.226.226 0 00.07-.165v-1.412a.226.226 0 00-.07-.165.227.227 0 00-.166-.07H4.94z"
      />
    </SVGBase>
  );
}

export default Draggable;