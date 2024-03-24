import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Hizmetler = () => {
    return (
        <>
            <div><h1 className='my-8 text-center text-3xl font-bold underline text-red-800 p-4 pt-6 underline-offset-4'>HİZMETLERİMİZ</h1></div>
            <div className='flex justify-center gap-6 p-4 flex-wrap '>
                <Card className="mt-6 w-96 flex bg-white">
                    <CardHeader color="white" className="relative max-h-96 shadow-xl">
                        <img
                            src="https://www.djistoreturkiye.com/img/products/dji-m30-dji-endustriyel-dji-577034-21-b_27.04.2022_6e65ee2.jpeg"
                            alt="buzdolabi"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Drone Satışı
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="/searchpage" className=""><Button>
                            Satın Al
                        </Button></a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-96">
                    <CardHeader color="white" className="relative max-h-96 shadow-xl">
                        <img
                            className='grid object-cover'
                            src="https://www.djistoreturkiye.com/img/products/11012923359282_25.02.2022_2898ad6.jpg"
                            alt="washing-machine-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Kamera ve Gimbal Satışı
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="/searchpage" className=""><Button>
                            Satın Al
                        </Button></a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-96">
                    <CardHeader color="white" className="relative max-h-96 shadow-xl">
                        <img
                            src="https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg"
                            alt="dishwasher-image"
                        />
                    </CardHeader>
                    <CardBody >
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Elektronik Cihaz Bakımı ve Tamiri
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="/iletisim" className=""><Button>
                            Servis Kaydı Oluştur
                        </Button></a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-96">
                    <CardHeader color="white" className="relative max-h-96 shadow-xl">
                        <img
                            src="https://www.djistoreturkiye.com/img/products/dji-zenmuse-h20t_19.06.2021_3bb5b89.jpg"
                            alt="tv-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Yedek Parça Satışı
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="/iletisim" className=""><Button>
                            Servis Kaydı Oluştur
                        </Button></a>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Hizmetler