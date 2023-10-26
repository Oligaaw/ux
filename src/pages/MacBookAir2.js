import { useCallback } from "react";
import styled from "styled-components";

const MacbookAir2Child = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 915px;
  height: 960px;
`;
const MacbookAir2Item = styled.div`
  position: absolute;
  top: 361px;
  left: 118px;
  border-radius: var(--br-mini);
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid var(--color-burlywood-100);
  box-sizing: border-box;
  width: 470px;
  height: 672px;
`;
const MacbookAir2Inner = styled.img`
  position: absolute;
  top: 648px;
  left: 822px;
  width: 915px;
  height: 960px;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  border-bottom: 4px solid var(--color-burlywood-100);
  box-sizing: border-box;
  width: 1280px;
  height: 218px;
  overflow: hidden;
`;
const MacbookAir2Child1 = styled.div`
  position: absolute;
  top: 1087px;
  left: 0px;
  background-color: var(--color-darkslategray);
  border-top: 4px solid #5f5445;
  box-sizing: border-box;
  width: 1280px;
  height: 180px;
  overflow: hidden;
`;
const Frontendutveckling = styled.b`
  position: absolute;
  top: 271px;
  left: 187px;
  font-size: 36px;
  display: inline-block;
  width: 339px;
  height: 49px;
`;
const Information = styled.b`
  position: absolute;
  top: 383px;
  left: 150px;
  font-size: 25px;
  display: inline-block;
  width: 270px;
  height: 76px;
`;
const SomFrontendutvecklareSkapar = styled.p`
  margin: 0;
`;
const SomFrontendutvecklareSkaparContainer = styled.div`
  position: absolute;
  top: 419px;
  left: 149px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
  display: inline-block;
  width: 416px;
  height: 456px;
`;
const F = styled.b`
  position: absolute;
  top: 105.5px;
  left: 5.3px;
  display: inline-block;
  width: 11.4px;
  height: 27.5px;
  transform: rotate(-107.56deg);
  transform-origin: 0 0;
`;
const R = styled.b`
  position: absolute;
  top: 82.5px;
  left: 0.2px;
  display: inline-block;
  width: 7.1px;
  height: 27.5px;
  transform: rotate(-91.22deg);
  transform-origin: 0 0;
`;
const O = styled.b`
  position: absolute;
  top: 63.3px;
  left: 1.2px;
  display: inline-block;
  width: 9.9px;
  height: 27.5px;
  transform: rotate(-75.57deg);
  transform-origin: 0 0;
`;
const N = styled.b`
  position: absolute;
  top: 42px;
  left: 8.6px;
  display: inline-block;
  width: 10px;
  height: 27.4px;
  transform: rotate(-58.61deg);
  transform-origin: 0 0;
`;
const T = styled.b`
  position: absolute;
  top: 24.3px;
  left: 21.5px;
  display: inline-block;
  width: 5.7px;
  height: 27.2px;
  transform: rotate(-43.92deg);
  transform-origin: 0 0;
`;
const E = styled.b`
  position: absolute;
  top: 13.1px;
  left: 35px;
  display: inline-block;
  width: 8.6px;
  height: 27.1px;
  transform: rotate(-30.08deg);
  transform-origin: 0 0;
`;
const N1 = styled.b`
  position: absolute;
  top: 3.9px;
  left: 54.1px;
  display: inline-block;
  width: 10.1px;
  height: 27px;
  transform: rotate(-14.31deg);
  transform-origin: 0 0;
`;
const D = styled.b`
  position: absolute;
  top: 0px;
  left: 76.8px;
  display: inline-block;
  width: 10.1px;
  height: 26.9px;
  transform: rotate(2.04deg);
  transform-origin: 0 0;
`;
const B = styled.b`
  position: absolute;
  top: 2.6px;
  left: 98.9px;
  display: inline-block;
  width: 5.8px;
  height: 27px;
  transform: rotate(16.36deg);
  transform-origin: 0 0;
`;
const S = styled.b`
  position: absolute;
  top: 8.7px;
  left: 115.4px;
  display: inline-block;
  width: 8.6px;
  height: 27.1px;
  transform: rotate(30.08deg);
  transform-origin: 0 0;
`;
const C = styled.b`
  position: absolute;
  top: 20.6px;
  left: 132.6px;
  display: inline-block;
  width: 8.6px;
  height: 27.2px;
  transform: rotate(45.31deg);
  transform-origin: 0 0;
`;
const H = styled.b`
  position: absolute;
  top: 36.6px;
  left: 146.2px;
  display: inline-block;
  width: 10px;
  height: 27.4px;
  transform: rotate(61.42deg);
  transform-origin: 0 0;
`;
const O1 = styled.b`
  position: absolute;
  top: 57.3px;
  left: 155.3px;
  display: inline-block;
  width: 9.9px;
  height: 27.5px;
  transform: rotate(78.41deg);
  transform-origin: 0 0;
`;
const O2 = styled.b`
  position: absolute;
  top: 79.6px;
  left: 158px;
  display: inline-block;
  width: 9.9px;
  height: 27.5px;
  transform: rotate(95.49deg);
  transform-origin: 0 0;
`;
const L = styled.b`
  position: absolute;
  top: 101px;
  left: 154.1px;
  display: inline-block;
  width: 5.7px;
  height: 27.5px;
  transform: rotate(110.4deg);
  transform-origin: 0 0;
`;
const Group = styled.div`
  position: absolute;
  top: 16px;
  left: 561px;
  width: 158px;
  height: 106.4px;
  font-size: var(--font-size-xs);
  color: var(--color-burlywood-200);
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 165px;
  left: 224px;
  width: 153px;
  height: 52px;
  mix-blend-mode: darken;
`;
const Information1 = styled.b`
  position: absolute;
  top: 175px;
  left: 244px;
  display: inline-block;
  color: var(--color-white);
  width: 218px;
  height: 33px;
`;
const Kursplan = styled.b`
  position: absolute;
  top: 175px;
  left: 698px;
  display: inline-block;
  width: 100px;
  height: 33px;
`;
const Recensioner = styled.b`
  position: absolute;
  top: 175px;
  left: 897px;
  display: inline-block;
  width: 122px;
  height: 21px;
`;
const Behrighet = styled.b`
  position: absolute;
  top: 175px;
  left: 479px;
  display: inline-block;
  width: 108px;
  height: 33px;
  cursor: pointer;
`;
const SprkkunskaperSomProgrammet = styled.div`
  position: absolute;
  top: 948px;
  left: 150px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
  display: inline-block;
  width: 315px;
  height: 23px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 98px;
  height: 100.7px;
`;
const Text1 = styled.div`
  position: absolute;
  height: calc(100% - 856.4px);
  top: 48px;
  left: 958.5px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: rotate(24.58deg);
  transform-origin: 0 0;
`;
const IconSocialLinkedin = styled.img`
  position: absolute;
  height: 1.38%;
  width: 1.25%;
  top: 98.62%;
  right: 27.8%;
  bottom: 0%;
  left: 70.94%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 68.7px;
  left: -1330px;
  width: 958.5px;
  height: 893.2px;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
`;
const IconSocialLinkedin1 = styled.img`
  position: absolute;
  height: 1.36%;
  width: 1.34%;
  top: 158.8%;
  right: 158.66%;
  bottom: -60.16%;
  left: -60%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Text11 = styled.div`
  position: absolute;
  height: calc(100% - 1231px);
  top: 1135.5px;
  left: -426.5px;
  font-size: var(--font-size-11xl);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: rotate(24deg);
  transform-origin: 0 0;
`;
const Text2 = styled.div`
  position: absolute;
  height: calc(100% - 1231px);
  top: 145px;
  left: 922.5px;
  font-size: var(--font-size-11xl);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: rotate(24deg);
  transform-origin: 0 0;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 36.8px;
  left: 583.2px;
  width: 114.7px;
  height: 113.3px;
`;
const Div = styled.div`
  position: absolute;
  top: 42px;
  left: 628px;
  font-size: 17px;
  font-family: var(--font-bowlby-one);
  display: inline-block;
  width: 34px;
  height: 19px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 364px;
  left: 640px;
  background-color: var(--color-burlywood-100);
  width: 0px;
  height: 657px;
`;
const MacbookAir2Child2 = styled.img`
  position: absolute;
  top: 361px;
  left: 699px;
  border-radius: var(--br-mini);
  width: 480px;
  height: 263px;
  object-fit: cover;
`;
const MacbookAir2Child3 = styled.img`
  position: absolute;
  top: 685px;
  left: 701px;
  border-radius: var(--br-mini);
  width: 480px;
  height: 263px;
  object-fit: cover;
`;
const WeCreate = styled.div`
  position: absolute;
  top: 78px;
  left: 200px;
  font-size: var(--font-size-21xl);
  display: inline-block;
  width: 265px;
  height: 62px;
`;
const ProblemSolvers = styled.div`
  position: absolute;
  top: 75px;
  left: 815px;
  font-size: var(--font-size-21xl);
  display: inline-block;
  width: 415px;
  height: 66px;
`;
const EmojiHerbIcon = styled.img`
  position: absolute;
  height: 4.76%;
  width: 5.6%;
  top: 7.47%;
  right: 47.23%;
  bottom: 87.77%;
  left: 47.16%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconJavascriptJs = styled.img`
  position: absolute;
  height: 2.37%;
  width: 2.34%;
  top: 77.03%;
  right: 73.75%;
  bottom: 20.6%;
  left: 23.91%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconFileTypeCss = styled.img`
  position: absolute;
  height: 2.37%;
  width: 2.07%;
  top: 77.03%;
  right: 79.96%;
  bottom: 20.6%;
  left: 17.97%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconFileTypeHtml = styled.img`
  position: absolute;
  height: 2.37%;
  width: 2.07%;
  top: 77.03%;
  right: 85.9%;
  bottom: 20.6%;
  left: 12.03%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IconReact = styled.img`
  position: absolute;
  height: 2.37%;
  width: 2.63%;
  top: 77.03%;
  right: 67.52%;
  bottom: 20.6%;
  left: 29.84%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const EmojiHerbIcon1 = styled.img`
  position: absolute;
  height: 5.37%;
  width: 4.09%;
  top: 94.63%;
  right: 0.36%;
  bottom: 0%;
  left: 95.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const EmojiHerbIcon2 = styled.img`
  position: absolute;
  height: 4.11%;
  width: 5.32%;
  top: 95.19%;
  right: 94.29%;
  bottom: 0.7%;
  left: 0.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const OmFrontendSchoolContainer = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  display: inline-block;
  width: 211px;
  height: 23px;
`;
const IconSocialLinkedin2 = styled.img`
  position: absolute;
  height: 21.35%;
  width: 2.12%;
  top: 31.25%;
  right: 6.15%;
  bottom: 47.4%;
  left: 91.73%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Klagomlshantering = styled.b`
  position: absolute;
  top: 0px;
  left: 408px;
  display: inline-block;
  width: 206px;
  height: 24px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 20.83%;
  width: 2.12%;
  top: 31.25%;
  right: 11.35%;
  bottom: 47.92%;
  left: 86.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 20.83%;
  width: 2.12%;
  top: 31.25%;
  right: 1.48%;
  bottom: 47.92%;
  left: 96.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 20.83%;
  width: 2.12%;
  top: 31.25%;
  right: 16.54%;
  bottom: 47.92%;
  left: 81.34%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Feschoolgmailcom = styled.b`
  position: absolute;
  top: 66px;
  left: 767px;
  font-size: 16px;
  display: inline-block;
  width: 176px;
  height: 24px;
`;
const OmOss = styled.b`
  position: absolute;
  top: 35px;
  left: 0px;
  display: inline-block;
  width: 74px;
  height: 25px;
`;
const VrtUtbildningskoncept = styled.b`
  position: absolute;
  top: 72px;
  left: 0px;
`;
const JobbaHosOss = styled.b`
  position: absolute;
  top: 36px;
  left: 408px;
`;
const Dataskydd = styled.b`
  position: absolute;
  top: 72px;
  left: 408px;
`;
const OmFrontendSchoolParent = styled.div`
  position: absolute;
  top: 1130px;
  left: 196px;
  width: 943px;
  height: 96px;
  color: var(--color-burlywood-200);
`;
const R400Container = styled.div`
  position: absolute;
  top: 325px;
  left: 137px;
  font-size: var(--font-size-mini);
  color: var(--color-white);
  display: inline-block;
  width: 431px;
  height: 44px;
`;
const MacbookAir2Root = styled.div`
  position: relative;
  background-color: var(--color-darkslategray);
  width: 100%;
  height: 1267px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-burlywood-100);
  font-family: var(--font-bona-nova);
`;

const MacBookAir2 = () => {
  const onBehrighetTextClick = useCallback(() => {
    // Please sync "MacBook Air - 3" to the project
  }, []);

  return (
    <MacbookAir2Root>
      <MacbookAir2Child alt="" src="/ellipse-4.svg" />
      <MacbookAir2Item />
      <MacbookAir2Inner alt="" src="/ellipse-3.svg" />
      <FrameDiv />
      <MacbookAir2Child1 />
      <Frontendutveckling>Frontendutveckling</Frontendutveckling>
      <Information>Information</Information>
      <SomFrontendutvecklareSkaparContainer>
        <SomFrontendutvecklareSkapar>
          Som frontendutvecklare skapar du med hjälp av kod det
          presentationslager som gör att människor kan interagera med tekniken,
          du arbetar med det man ser och använder när man surfar på en
          webbplats.
        </SomFrontendutvecklareSkapar>
        <SomFrontendutvecklareSkapar>&nbsp;</SomFrontendutvecklareSkapar>
        <SomFrontendutvecklareSkapar>
          En frontendutvecklare arbetar huvudsakligen med modern webbutveckling
          med inriktning på responsiv webb och mobila plattformar. För att skapa
          interaktivitet och responsivt innehåll används en blandning av
          JavaScript och ramverk tillsammans med HTML och CSS. Även om
          utbildningen har ett fokus på frontend så kommer du även läsa
          angränsande områden som backend som ger dig möjligheten att gå mot
          fullstackutvecklare senare i karriären.
        </SomFrontendutvecklareSkapar>
        <SomFrontendutvecklareSkapar>&nbsp;</SomFrontendutvecklareSkapar>
        <SomFrontendutvecklareSkapar>
          I denna utbildning får du specialiserade kunskaper inom
          frontendutveckling med JavaScript men också överblick över angränsande
          områden som projektledning, testning, backendutveckling och UX/UI. Du
          kommer att kunna arbeta med att planera, utföra samt identifiera
          resurser för att kunna utveckla säkra webbapplikationer med
          frontendutveckling.
        </SomFrontendutvecklareSkapar>
        <SomFrontendutvecklareSkapar>&nbsp;</SomFrontendutvecklareSkapar>
        <SomFrontendutvecklareSkapar>
          Efter utbildningen är målet att du självständigt ska kunna ansvara för
          frontendutvecklingen i ett webbprojekt med särskilt fokus på
          säkerhetsaspekter och vara delaktig i kvalitetssäkring av
          webbutvecklingsarbetet genom att övervaka och följa upp att projektet
          levererar det som definierats enligt kravspecifikation, samt vid behov
          kommunicera problem och ge förslag på lösningar.
        </SomFrontendutvecklareSkapar>
      </SomFrontendutvecklareSkaparContainer>
      <Group>
        <F>F</F>
        <R>R</R>
        <O>O</O>
        <N>N</N>
        <T>T</T>
        <E>E</E>
        <N1>N</N1>
        <D>D</D>
        <B> </B>
        <S>S</S>
        <C>C</C>
        <H>H</H>
        <O1>O</O1>
        <O2>O</O2>
        <L>L</L>
      </Group>
      <RectangleIcon alt="" src="/rectangle-5.svg" />
      <Information1>Information</Information1>
      <Kursplan>Kursplan</Kursplan>
      <Recensioner>Recensioner</Recensioner>
      <Behrighet onClick={onBehrighetTextClick}>Behörighet</Behrighet>
      <SprkkunskaperSomProgrammet>
        Språkkunskaper som programmet erbjuder:
      </SprkkunskaperSomProgrammet>
      <GroupParent>
        <GroupChild alt="" src="/group-3.svg" />
        <Text1>{` `}</Text1>
        <IconSocialLinkedin alt="" src="/-icon-social-linkedin.svg" />
      </GroupParent>
      <IconSocialLinkedin1 alt="" src="/-icon-social-linkedin1.svg" />
      <Text11>{` `}</Text11>
      <Text2>{` `}</Text2>
      <GroupIcon alt="" src="/group-4.svg" />
      <Div>{`</>`}</Div>
      <LineDiv />
      <MacbookAir2Child2 alt="" src="/rectangle-2@2x.png" />
      <MacbookAir2Child3 alt="" src="/rectangle-3@2x.png" />
      <WeCreate>WE CREATE</WeCreate>
      <ProblemSolvers>PROBLEM SOLVERS</ProblemSolvers>
      <EmojiHerbIcon alt="" src="/-emoji-herb.svg" />
      <IconJavascriptJs alt="" src="/-icon-javascript-js.svg" />
      <IconFileTypeCss alt="" src="/-icon-file-type-css.svg" />
      <IconFileTypeHtml alt="" src="/-icon-file-type-html.svg" />
      <IconReact alt="" src="/-icon-react.svg" />
      <EmojiHerbIcon1 alt="" src="/-emoji-herb1.svg" />
      <EmojiHerbIcon2 alt="" src="/-emoji-herb2.svg" />
      <OmFrontendSchoolParent>
        <OmFrontendSchoolContainer>
          <SomFrontendutvecklareSkapar>
            Om Frontend School
          </SomFrontendutvecklareSkapar>
          <SomFrontendutvecklareSkapar>&nbsp;</SomFrontendutvecklareSkapar>
        </OmFrontendSchoolContainer>
        <IconSocialLinkedin2 alt="" src="/-icon-social-linkedin2.svg" />
        <Klagomlshantering>
          <SomFrontendutvecklareSkapar>
            Klagomålshantering
          </SomFrontendutvecklareSkapar>
          <SomFrontendutvecklareSkapar>&nbsp;</SomFrontendutvecklareSkapar>
        </Klagomlshantering>
        <VectorIcon alt="" src="/vector.svg" />
        <VectorIcon1 alt="" src="/vector1.svg" />
        <VectorIcon2 alt="" src="/vector2.svg" />
        <Feschoolgmailcom>fe.school@gmail.com</Feschoolgmailcom>
        <OmOss>
          <SomFrontendutvecklareSkapar>Om oss</SomFrontendutvecklareSkapar>
          <SomFrontendutvecklareSkapar>&nbsp;</SomFrontendutvecklareSkapar>
        </OmOss>
        <VrtUtbildningskoncept>Vårt utbildningskoncept</VrtUtbildningskoncept>
        <JobbaHosOss>Jobba hos oss!</JobbaHosOss>
        <Dataskydd>Dataskydd</Dataskydd>
      </OmFrontendSchoolParent>
      <R400Container>
        <SomFrontendutvecklareSkapar>{`2 år • 400 Yh-poäng • Klassrum • Heltid • Göteborg & Stockholm`}</SomFrontendutvecklareSkapar>
      </R400Container>
    </MacbookAir2Root>
  );
};

export default MacBookAir2;
