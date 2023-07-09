
import Table from 'react-bootstrap/Table';
import "./DetailsComponent.css"

interface IDetailsComponent {
    object: {
        operacin: string,
        descripcion: string,
        baos: number,
        dormitorios: number,
        estacionamentoS: number,
        m2: string,
        precio: string,
        precioUf: string,
        terraza: string,
        tipoPropiedad: String,
        urlMapa: string
    }
}
const DetailsComponent = (props: IDetailsComponent) => {

    return (
        <>
            <div className="description">
                <div className='title'>Características</div>
                <div className='tables'>
                    <div className='col-md-6 col-sm-6 col-xs-12'>
                        <Table striped bordered hover responsive>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Operacion</b>
                                    </td>
                                    <td>{props.object.operacin}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Tipo Propiedad</b>
                                    </td>
                                    <td>{props.object.tipoPropiedad}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Precio UF</b>
                                    </td>
                                    <td>{props.object.precioUf}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Precio $</b>
                                    </td>
                                    <td>{props.object.precio}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>m2</b>
                                    </td>
                                    <td>{props.object.m2}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6 col-sm-6 col-xs-12'>
                        <Table striped bordered hover responsive>
                            <tbody>

                                <tr>
                                    <td>
                                        <b>Dormitorios</b>
                                    </td>
                                    <td>{props.object.dormitorios}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Baños</b>
                                    </td>
                                    <td>{props.object.baos}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Estacionamento (s)</b>
                                    </td>
                                    <td>{props.object.estacionamentoS}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Terraza (s)</b>
                                    </td>
                                    <td>{props.object.terraza}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className='title'>Descripción</div>
                <div className='text'>{props.object.descripcion}</div>
                <div className='title'>Mapa</div>
                <div>
                    <iframe title='maps'
                    src={props.object.urlMapa} width="600" height="450" ></iframe>
                </div>
            </div>
        </>
    )
};

export default DetailsComponent;
