import Link from 'next/link'
import {Menu, MenuButton, MenuList, IconButton, Flex, Box, Spacer, MenuItem, Button, ButtonGroup, Container, HStack, useBreakpointValue, useColorModeValue} from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {
    // <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    //     <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
    //         <Link href='/' paddingLeft='2'>Realtor</Link>
    //     </Box>
    //     <Spacer />
    //     <Box>
    //         <Menu>
    //             <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400'/>
    //             <MenuList>
    //                 <Link href='/' passHref>
    //                     <MenuItem icon={<FcHome/>}>Home</MenuItem>
    //                 </Link>
    //                 <Link href='/search' passHref>
    //                     <MenuItem icon={<BsSearch/>}>Search</MenuItem>
    //                 </Link>
    //                 <Link href='/search?purpose=for-sale' passHref>
    //                     <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
    //                 </Link>
    //                 <Link href='/search?purpose=for-rent' passHref>
    //                     <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
    //                 </Link>
    //             </MenuList>
    //         </Menu>
    //     </Box>
    // </Flex>

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
      })

   return ( 
   
      <Box as="nav"  bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} 
      paddingLeft= '4' paddingRight='4'
      py={{
        base: '4',
        lg: '5',
      }}>
        {/* <Container marginRight='0' marginLeft='0' py={{ base: '4', lg: '5', }}> */}
        
        <HStack spacing="6">
            <Box fontSize='3xl' color='purple.400' fontWeight='bold' marginRight='5'>
                <Link href='/' paddingLeft='2'>Estatery</Link>
            </Box>
            {/* <Logo /> */}
            
            {isDesktop ? (
              <Flex justifyContent='space-between' flex="1">
                <ButtonGroup variant="ghost" spacing="4">
                  
                    <Button color='black'>
                        <Link href='/search?purpose=for-rent' passHref>Rent</Link>
                    </Button>
                    <Button color='black'>
                        <Link href='/search?purpose=for-sale' passHref>Buy</Link>
                    </Button>
                    <Button color='black'>
                        <Link href='/' passHref>Sell</Link>
                    </Button>
                    <Button rightIcon={<RiArrowDropDownLine />} color='black'>
                        <Link href='/' passHref>Manage Property</Link>
                    </Button>
                    <Button rightIcon={<RiArrowDropDownLine />} color='black'>
                        <Link href='/' passHref>Resources</Link>
                    </Button>
                  
                </ButtonGroup>
                <Flex>
                    <HStack justifyContent='flex-end' spacing="5">
                        <Button colorScheme='purple' variant="outline">Login</Button>
                    <   Button colorScheme='purple' variant="solid">Sign up</Button>
                    </HStack>
                </Flex>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
        </HStack>
        {/* </Container> */}
      </Box>
    
)}

export default Navbar
