import './App.css'
import SectionBanderas from './components/Section.Banderas'
import SectionElectronica from './components/Section.Electronica'
import SectionHeros from './components/Section.Heros'
import SectionInstrumentacion from './components/Section.Instrumentacion'
import SectionMetalmecanica from './components/Section.Metalmecanica'
import SectionServiciosIcon from './components/Section.ServiciosIcon'
import SectionElectricidad from './components/Section.Electricidad'
import SectionSuministros from './components/Section.Suministros'
import SectionLampara from './components/Section.Lampara'
import SectionPanelSolar from './components/Section.PanelSolar'
import SectionTecnologiaIOT from './components/Section.TecnologiaIOT'
import SectionGruas from './components/Section.Gruas'
import SectionMotores from './components/Section.Motores'
import SectionSolucionesTecnologicas from './components/Section.SolucionesTecnologicas'
import SectionContacto from './components/Section.Contacto'
import SectionPalabras from './components/Section.Palabras'

function App() {

  return (
    <div className='w-full overflow-hidden md:overflow-auto min-h-screen '>
      {/* BANDERAS */}
      <SectionBanderas />

      {/* CONTENT PAGE */}
      <SectionHeros />

      {/* SERVICIOS ICONS */}
      <SectionServiciosIcon />

      {/* METALMECANICA */}
      <SectionMetalmecanica />

      {/* INSTRUMENTACION */}
      <SectionInstrumentacion />

      {/* ELECTRONICA */}
      <SectionElectronica />

      {/* ELECTRICIDAD */}
      <SectionElectricidad/>

      {/* SUMINISTROS */}
      <SectionSuministros/>

      {/* LAMPARA */}
      <SectionLampara/>

      {/* PANELES SOLARES */}
      <SectionPanelSolar/>

      {/* TECNOLOGIA IOT */}
      <SectionTecnologiaIOT/>

      {/* GRUAS GROVE Y KONECRANES */}
      <SectionGruas/>

      {/* MOTORES DE CALIDAD */}
      <SectionMotores/>

      {/* SOLUCIONES TECNOLOGICAS */}
      <SectionSolucionesTecnologicas/>

      {/* CONTACTO */}
      <SectionContacto/>
      
      {/* PALABRAS */}
      <SectionPalabras/>

    </div>
  )
}

export default App
