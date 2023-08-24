import { Badge, Button, Col, Row, Stack } from 'react-bootstrap'
import { useNote } from './NoteLayout'
import { Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

type NoteProps = {
    onDelete: (id: string) => void
}

export function Note({ onDelete }: NoteProps) {
    const note = useNote()
    const navigate = useNavigate()

    return (
        <>
            <Row className='align-items-center mb-4'>
                <div className='d-flex justify-content-evenly'>
                    <Col className=''><h2>&lt;Notes/&gt;</h2></Col>
                    <Col xs="auto">
                        <Stack gap={2} direction='horizontal'>
                            <Link to={`/${note.id}/edit`}>
                                <Button variant='primary'>Edit</Button>
                            </Link>
                            <Button onClick={() => {
                                onDelete(note.id)
                                navigate('/')
                            }} variant='outline-danger'>Delete</Button>
                            <Link to='/'>
                                <Button variant='outline-secondary'>Back</Button>
                            </Link>
                        </Stack>
                    </Col>
                </div>
                <Col className='border-top mt-2 pt-2'>
                    <h3 className='border-bottom p-3'>Title: {note.title}</h3>
                    {note.tags.length > 0 && (
                        <Stack
                            gap={1}
                            direction='horizontal'
                            className='flex-wrap pt-2'
                        >
                            {note.tags.map(tag => (
                                <Badge className='text-truncate' key={tag.id}>
                                    {tag.label}
                                </Badge>
                            ))}
                        </Stack>
                    )}
                </Col>
            </Row>
            <ReactMarkdown className=''>{note.markdown}</ReactMarkdown>
        </>
    )
}
