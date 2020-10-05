import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import CurrencyInput from 'react-currency-input';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import {
  ContainerRoot,
  Formarea,
  Title,
  Formbox,
  Buttons,
  Flex,
  PrecoArea,
} from './styles';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

const RegisterProduct: React.FC = () => {
  const { addToast } = useToast();

  const handleCreateProduct = useCallback(
    async data => {
      const product = {
        title: data.title,
        description: data.description,
        price: data.price,
        type: data.type,
        image: data.images,
      };

      api.post('/items', product).then(() =>
        addToast({
          type: 'sucess',
          title: 'Produto Adicionado!',
          description: 'Parabéns',
        }),
      );
    },
    [addToast],
  );

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required(),
          description: Yup.string().required(),
          price: Yup.number().required(),
          images: Yup.string().required(),
          type: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleCreateProduct(data);
      } catch (err) {
        alert(err);
      }
    },
    [handleCreateProduct],
  );
  return (
    <>
      <div style={{ width: '100vw' }}>
        <Banner backIcon />
        <ContainerRoot>
          <Sidebar />
          <Form onSubmit={handleSubmit}>
            <Formarea>
              <Title>Adicionar Produto</Title>
              <Formbox>
                <Input
                  label="Título"
                  help="O título deverá conter no máximo 60 caracteres"
                  name="title"
                  type="text"
                />

                <PrecoArea>
                  <Select
                    label="Preço"
                    name="type"
                    options={[
                      { value: 'Fixo', label: 'Preço Fixo' },
                      { value: 'Variavel', label: 'A partir de' },
                    ]}
                  />
                  <CurrencyInput
                    id="Preco"
                    prefix="R$ "
                    decimalSeparator=","
                    thousandSeparator="."
                  />
                </PrecoArea>

                <Flex>
                  <Select
                    label="Tipo"
                    name="type"
                    options={[
                      { value: '0', label: 'Produto' },
                      { value: '1', label: 'Serviço' },
                    ]}
                  />
                  <Select
                    label="Categoria"
                    name="type"
                    options={[
                      { value: '0', label: 'Produto' },
                      { value: '1', label: 'Serviço' },
                    ]}
                  />
                </Flex>

                <Flex>
                  <Input
                    label="Imagens"
                    help="Insira imagens do seu produto ou serviço"
                    name="images"
                    type="file"
                  />
                  <Input name="images" type="file" />
                </Flex>

                <TextArea label="Descrição" name="description" />

                <Buttons>
                  <Button type="submit">Salvar</Button>
                  <Button type="button">Cancelar</Button>
                </Buttons>
              </Formbox>
            </Formarea>
          </Form>
        </ContainerRoot>
        <Footer />
      </div>
    </>
  );
};

export default RegisterProduct;
