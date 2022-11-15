import React, { useRef, useState } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    Button,
    Container,
    VStack,
    Box,
    useColorModeValue,
    Heading,
    HStack,
} from '@chakra-ui/react'

import Link from 'next/link'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import ToggleTheme from './ToggleTheme'

function Header() {

    const [isOpen, onOpen] = useState(false)

    const [links] = useState([{ link: "#", title: "About" }, { link: "#", title: "Experience" }, { link: "#", title: "Work" }, { link: "#", title: "Contact" }])

    const btnRef = useRef(null)

    return (
        <>
            <Container maxWidth={"7xl"} className='flex items-center justify-between py-2'>
                <a className='text-xl font-serif'>Nisarg Saple</a>
                <div className='flex'>
                    <HStack spacing={6} className={"pr-4"} display={{ base: "none", md: "flex" }}>
                        {links.map((link, key) => (
                            <Box key={key} className='w-full' display="flex" justifyContent="flex-start" flexDirection="row" alignItems="center">
                                <Link href={link.link} className="text-md hover:underline" >{link.title}</Link>
                            </Box>
                        ))}
                        <Box h='40px' className='w-full' display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Link href={"#"} className="border border-[#4ACC6F] px-8 py-2 rounded">Resume</Link>
                        </Box>
                    </HStack>
                    <ToggleTheme ></ToggleTheme>
                    <Button display={{ md: 'none' }} bg="transparent" ref={btnRef} p={0} onClick={() => { onOpen(!isOpen) }}>
                        <HamburgerIcon h={25} w={25} />
                    </Button>
                </div>
            </Container>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={() => { onOpen(!isOpen) }}
                finalFocusRef={btnRef}
                size="xs"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <div className={useColorModeValue("bg-white", "bg-gray-800") + " h-screen flex flex-col"}>
                        <div className="py-4 px-4 flex justify-end basis-[5%]">
                            <Button onClick={() => { onOpen(!isOpen) }} bg={"transparent"}><CloseIcon h={5} w={5}></CloseIcon></Button>
                        </div>

                        <DrawerBody className="flex justify-start items-center w-full flex-col">
                            <Box h='40px' px={10} pt={10} className='w-full' display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                                <Heading as="h4" className={useColorModeValue("text-[#3DAC5F]", "text-[#4ACC6F]") + " tracking-wide"}>[ Menu ]</Heading>
                            </Box>
                            <div className='w-full pt-[30%]'>
                                <VStack
                                    spacing={10}
                                    alignItems="center"
                                    justifyContent='space-between'
                                >
                                    {links.map((link, key) => (
                                        <Box key={key} h='40px' px={10} className='w-full' display="flex" justifyContent="flex-start" flexDirection="row" alignItems="center">
                                            <p className={useColorModeValue("text-[#3DAC5F]", "text-[#4ACC6F]")}>{"[0" + (key + 1) + "]:"}</p>&nbsp;
                                            <Link href={link.link} className="text-lg hover:underline" >{"<" + link.title + "/>"}</Link>
                                        </Box>
                                    ))}
                                </VStack>
                            </div>
                            <Box h='40px' px={10} pt={20} className='w-full' display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                                <Link href={"#"} className="border border-[#4ACC6F] px-8 py-2 rounded">Resume</Link>
                            </Box>
                        </DrawerBody>
                        <DrawerFooter className='basis-[5%]'>
                            <div className='flex justify-center w-full items-center'>
                                <a className='text-sm'>&copy; Nisarg Saple, 2022</a>
                            </div>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header