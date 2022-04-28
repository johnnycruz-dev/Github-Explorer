import { Repository } from './RepositoryList';

interface RepositoryItemProps {
  repository: Repository;
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  const { name, description, html_url } = repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url}>Acessar repositório</a>
    </li>
  )
}