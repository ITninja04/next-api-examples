import { Alert, AlertIcon } from '@chakra-ui/alert';
import {
  Button, Center, Container, FormControl, FormErrorMessage, FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Spinner, Textarea, useDisclosure
} from '@chakra-ui/react';

import {faker} from "@faker-js/faker";
import {ChatIcon} from "@heroicons/react/solid"
import {
  Formik,
  Form,
  Field,
} from 'formik';

import React from "react";
import { useAddNewCommentMutation } from '@/features/api';

export interface CommentModalProps {
  postId: number;
}

const CommentModal:React.FC<CommentModalProps> = ({postId}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [addComment, {error, data, isLoading, isError, status, isSuccess}] = useAddNewCommentMutation();
  React.useEffect(() => {

  }, [data, status])

  return (
    <>
      <Center>
        <Button leftIcon={<ChatIcon />} onClick={onOpen} colorScheme='teal' variant='solid'>
          Leave A Comments
        </Button>
      <>
        {error && (
          <Alert status='warning'>
            <AlertIcon />
            An error occurred while attempting to submit your comment.
          </Alert>
        )}

        {isSuccess && (
          <Alert status='success'>
            <AlertIcon />
            Comment successfully submitted.
          </Alert>
        )}

        {isLoading && (
          <Spinner
            thickness='4px'
            speed='0.35s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        )}
      </>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave a Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ comment: '' }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                const { comment } = values;
                const newComment = {
                  body: comment,
                  email: faker.internet.email(),
                  postId: postId,
                  name: faker.name.findName(),
                };

                console.log(addComment);
                console.dir(addComment);

                // if(addComment) {
                //   addComment(() => newComment);
                // }
                setTimeout(() => {

                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name='comment'>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor='comment'>Comment</FormLabel>
                        <Textarea
                          {...field} id='comment'
                          placeholder='Leave a comment here.'
                          size='sm'
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red'  onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CommentModal
